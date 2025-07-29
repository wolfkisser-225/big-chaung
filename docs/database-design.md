# CTF平台数据库设计文档

## 数据库概述

本文档描述了基于多模态行为特征的CTF动态Flag防作弊系统的数据库设计。

## 核心表结构

### 1. 用户表 (users)

```sql
CREATE TABLE users (
    id VARCHAR(36) PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    salt VARCHAR(32) NOT NULL,
    role ENUM('admin', 'participant', 'organizer') DEFAULT 'participant',
    status ENUM('active', 'banned', 'pending') DEFAULT 'active',
    avatar_url VARCHAR(255),
    bio TEXT,
    school VARCHAR(100),
    major VARCHAR(100),
    grade VARCHAR(20),
    total_score INT DEFAULT 0,
    solved_challenges INT DEFAULT 0,
    participated_contests INT DEFAULT 0,
    ranking INT DEFAULT 0,
    registration_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login_time TIMESTAMP,
    preferences JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 2. 比赛表 (contests)

```sql
CREATE TABLE contests (
    id VARCHAR(36) PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    status ENUM('upcoming', 'running', 'ended', 'cancelled') DEFAULT 'upcoming',
    type ENUM('public', 'private', 'invitation') DEFAULT 'public',
    organizer_id VARCHAR(36) NOT NULL,
    max_participants INT,
    current_participants INT DEFAULT 0,
    rules TEXT,
    prizes JSON,
    registration_start TIMESTAMP,
    registration_end TIMESTAMP,
    dynamic_flag_enabled BOOLEAN DEFAULT TRUE,
    behavior_check_enabled BOOLEAN DEFAULT TRUE,
    blockchain_verification BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (organizer_id) REFERENCES users(id)
);
```

### 3. 题目表 (challenges)

```sql
CREATE TABLE challenges (
    id VARCHAR(36) PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    category ENUM('web', 'pwn', 'crypto', 'reverse', 'misc', 'forensics') NOT NULL,
    difficulty ENUM('easy', 'medium', 'hard') NOT NULL,
    base_score INT NOT NULL,
    dynamic_scoring BOOLEAN DEFAULT FALSE,
    current_score INT,
    static_flag VARCHAR(255),
    flag_template VARCHAR(255),
    hints JSON,
    attachments JSON,
    docker_image VARCHAR(255),
    port_mapping JSON,
    solved_count INT DEFAULT 0,
    total_attempts INT DEFAULT 0,
    author_id VARCHAR(36) NOT NULL,
    status ENUM('active', 'inactive', 'draft') DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(id)
);
```

### 4. 比赛题目关联表 (contest_challenges)

```sql
CREATE TABLE contest_challenges (
    id VARCHAR(36) PRIMARY KEY,
    contest_id VARCHAR(36) NOT NULL,
    challenge_id VARCHAR(36) NOT NULL,
    order_index INT,
    unlock_time TIMESTAMP,
    is_visible BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (contest_id) REFERENCES contests(id) ON DELETE CASCADE,
    FOREIGN KEY (challenge_id) REFERENCES challenges(id) ON DELETE CASCADE,
    UNIQUE KEY unique_contest_challenge (contest_id, challenge_id)
);
```

### 5. Flag提交记录表 (flag_submissions)

```sql
CREATE TABLE flag_submissions (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    challenge_id VARCHAR(36) NOT NULL,
    contest_id VARCHAR(36),
    submitted_flag VARCHAR(255) NOT NULL,
    is_correct BOOLEAN NOT NULL,
    score_awarded INT DEFAULT 0,
    submission_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45),
    user_agent TEXT,
    behavior_score DECIMAL(3,2),
    verification_status ENUM('pending', 'verified', 'suspicious', 'failed') DEFAULT 'pending',
    blockchain_hash VARCHAR(64),
    dynamic_flag_id VARCHAR(36),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (challenge_id) REFERENCES challenges(id),
    FOREIGN KEY (contest_id) REFERENCES contests(id)
);
```

### 6. 动态Flag表 (dynamic_flags)

```sql
CREATE TABLE dynamic_flags (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    challenge_id VARCHAR(36) NOT NULL,
    contest_id VARCHAR(36),
    flag_value VARCHAR(255) NOT NULL,
    generation_algorithm VARCHAR(50),
    generation_params JSON,
    expires_at TIMESTAMP,
    is_used BOOLEAN DEFAULT FALSE,
    used_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (challenge_id) REFERENCES challenges(id),
    FOREIGN KEY (contest_id) REFERENCES contests(id),
    UNIQUE KEY unique_user_challenge_flag (user_id, challenge_id, contest_id)
);
```

### 7. 行为特征模板表 (behavior_templates)

```sql
CREATE TABLE behavior_templates (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    keystroke_dynamics JSON,
    mouse_trajectory JSON,
    typing_patterns JSON,
    click_patterns JSON,
    sample_count INT DEFAULT 0,
    accuracy DECIMAL(3,2),
    confidence_level DECIMAL(3,2),
    is_active BOOLEAN DEFAULT TRUE,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    UNIQUE KEY unique_user_template (user_id)
);
```

### 8. 行为数据采集表 (behavior_data)

```sql
CREATE TABLE behavior_data (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    session_id VARCHAR(36) NOT NULL,
    data_type ENUM('keystroke', 'mouse', 'click', 'scroll', 'focus') NOT NULL,
    raw_data JSON NOT NULL,
    processed_data JSON,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    page_url VARCHAR(255),
    challenge_id VARCHAR(36),
    contest_id VARCHAR(36),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (challenge_id) REFERENCES challenges(id),
    FOREIGN KEY (contest_id) REFERENCES contests(id),
    INDEX idx_user_session (user_id, session_id),
    INDEX idx_timestamp (timestamp)
);
```

### 9. 区块链验证记录表 (blockchain_verifications)

```sql
CREATE TABLE blockchain_verifications (
    id VARCHAR(36) PRIMARY KEY,
    submission_id VARCHAR(36) NOT NULL,
    transaction_hash VARCHAR(66) NOT NULL,
    block_number BIGINT,
    block_hash VARCHAR(66),
    contract_address VARCHAR(42),
    gas_used BIGINT,
    verification_status ENUM('pending', 'confirmed', 'failed') DEFAULT 'pending',
    verification_data JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    confirmed_at TIMESTAMP,
    FOREIGN KEY (submission_id) REFERENCES flag_submissions(id),
    UNIQUE KEY unique_submission_verification (submission_id)
);
```

### 10. 系统日志表 (system_logs)

```sql
CREATE TABLE system_logs (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36),
    action VARCHAR(100) NOT NULL,
    resource_type VARCHAR(50),
    resource_id VARCHAR(36),
    details JSON,
    ip_address VARCHAR(45),
    user_agent TEXT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    INDEX idx_user_action (user_id, action),
    INDEX idx_timestamp (timestamp)
);
```

### 11. 比赛参与记录表 (contest_participants)

```sql
CREATE TABLE contest_participants (
    id VARCHAR(36) PRIMARY KEY,
    contest_id VARCHAR(36) NOT NULL,
    user_id VARCHAR(36) NOT NULL,
    registration_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('registered', 'participating', 'finished', 'disqualified') DEFAULT 'registered',
    total_score INT DEFAULT 0,
    rank_position INT,
    last_submission_time TIMESTAMP,
    FOREIGN KEY (contest_id) REFERENCES contests(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id),
    UNIQUE KEY unique_contest_participant (contest_id, user_id)
);
```

### 12. 排行榜表 (leaderboards)

```sql
CREATE TABLE leaderboards (
    id VARCHAR(36) PRIMARY KEY,
    contest_id VARCHAR(36),
    user_id VARCHAR(36) NOT NULL,
    category ENUM('overall', 'web', 'pwn', 'crypto', 'reverse', 'misc') DEFAULT 'overall',
    score INT NOT NULL,
    rank_position INT NOT NULL,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (contest_id) REFERENCES contests(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id),
    UNIQUE KEY unique_leaderboard_entry (contest_id, user_id, category)
);
```

## 索引优化

```sql
-- 用户相关索引
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_total_score ON users(total_score DESC);

-- 比赛相关索引
CREATE INDEX idx_contests_status ON contests(status);
CREATE INDEX idx_contests_start_time ON contests(start_time);
CREATE INDEX idx_contests_end_time ON contests(end_time);

-- 题目相关索引
CREATE INDEX idx_challenges_category ON challenges(category);
CREATE INDEX idx_challenges_difficulty ON challenges(difficulty);
CREATE INDEX idx_challenges_status ON challenges(status);

-- 提交记录索引
CREATE INDEX idx_submissions_user_challenge ON flag_submissions(user_id, challenge_id);
CREATE INDEX idx_submissions_contest ON flag_submissions(contest_id);
CREATE INDEX idx_submissions_time ON flag_submissions(submission_time DESC);
CREATE INDEX idx_submissions_correct ON flag_submissions(is_correct);

-- 行为数据索引
CREATE INDEX idx_behavior_user_session ON behavior_data(user_id, session_id);
CREATE INDEX idx_behavior_timestamp ON behavior_data(timestamp);
CREATE INDEX idx_behavior_type ON behavior_data(data_type);
```

## 数据关系说明

1. **用户与比赛**: 多对多关系，通过 `contest_participants` 表关联
2. **比赛与题目**: 多对多关系，通过 `contest_challenges` 表关联
3. **用户与题目**: 通过 `flag_submissions` 表记录提交关系
4. **动态Flag**: 每个用户在每个题目中都有唯一的动态Flag
5. **行为特征**: 每个用户有唯一的行为模板，多条行为数据记录
6. **区块链验证**: 与Flag提交一对一关系

## 数据安全考虑

1. **密码安全**: 使用强哈希算法(bcrypt)和随机盐值
2. **敏感数据**: Flag值、行为数据等需要加密存储
3. **数据备份**: 定期备份关键数据
4. **访问控制**: 基于角色的数据访问权限
5. **审计日志**: 记录所有关键操作的日志

## 性能优化建议

1. **分表策略**: 行为数据表按时间分表
2. **缓存策略**: 排行榜、用户信息等热点数据使用Redis缓存
3. **读写分离**: 查询操作使用只读副本
4. **数据归档**: 定期归档历史数据
5. **连接池**: 使用数据库连接池优化连接管理