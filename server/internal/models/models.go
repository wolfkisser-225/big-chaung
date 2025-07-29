package models

import (
	"time"

	"gorm.io/gorm"
)

// UserRole 用户角色枚举
type UserRole string

const (
	UserRoleUser      UserRole = "USER"
	UserRoleAdmin     UserRole = "ADMIN"
	UserRoleModerator UserRole = "MODERATOR"
)

// Difficulty 难度枚举
type Difficulty string

const (
	DifficultyEasy   Difficulty = "EASY"
	DifficultyMedium Difficulty = "MEDIUM"
	DifficultyHard   Difficulty = "HARD"
)

// SubmissionStatus 提交状态枚举
type SubmissionStatus string

const (
	SubmissionStatusPending   SubmissionStatus = "PENDING"
	SubmissionStatusCorrect   SubmissionStatus = "CORRECT"
	SubmissionStatusIncorrect SubmissionStatus = "INCORRECT"
	SubmissionStatusError     SubmissionStatus = "ERROR"
)

// User 用户模型
type User struct {
	ID        uint      `json:"id" gorm:"primaryKey"`
	Username  string    `json:"username" gorm:"type:varchar(50);uniqueIndex;not null"`
	Email     string    `json:"email" gorm:"type:varchar(100);uniqueIndex;not null"`
	Password  string    `json:"-" gorm:"not null"` // 不在JSON中返回密码
	Role      UserRole  `json:"role" gorm:"default:USER"`
	Avatar    *string   `json:"avatar"`
	Bio       *string   `json:"bio"`
	Score     int       `json:"score" gorm:"default:0"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`

	// 关联关系
	Submissions         []Submission         `json:"submissions,omitempty" gorm:"foreignKey:UserID"`
	ContestParticipants []ContestParticipant `json:"contestParticipants,omitempty" gorm:"foreignKey:UserID"`
}

// Challenge 题目模型
type Challenge struct {
	ID          uint       `json:"id" gorm:"primaryKey"`
	Title       string     `json:"title" gorm:"not null"`
	Description string     `json:"description" gorm:"type:text"`
	Difficulty  Difficulty `json:"difficulty" gorm:"default:EASY"`
	Points      int        `json:"points" gorm:"default:100"`
	Flag        string     `json:"-" gorm:"not null"` // 不在JSON中返回flag
	Hints       *string    `json:"hints" gorm:"type:text"`
	Files       *string    `json:"files" gorm:"type:text"`
	Category    string     `json:"category"`
	IsActive    bool       `json:"isActive" gorm:"default:true"`
	CreatedAt   time.Time  `json:"createdAt"`
	UpdatedAt   time.Time  `json:"updatedAt"`

	// 关联关系
	Submissions       []Submission       `json:"submissions,omitempty" gorm:"foreignKey:ChallengeID"`
	ContestChallenges []ContestChallenge `json:"contestChallenges,omitempty" gorm:"foreignKey:ChallengeID"`
}

// Submission 提交记录模型
type Submission struct {
	ID          uint             `json:"id" gorm:"primaryKey"`
	UserID      uint             `json:"userId" gorm:"not null"`
	ChallengeID uint             `json:"challengeId" gorm:"not null"`
	Flag        string           `json:"flag" gorm:"not null"`
	Status      SubmissionStatus `json:"status" gorm:"default:PENDING"`
	Score       *int             `json:"score"`
	CreatedAt   time.Time        `json:"createdAt"`
	UpdatedAt   time.Time        `json:"updatedAt"`

	// 关联关系
	User      User      `json:"user,omitempty" gorm:"foreignKey:UserID"`
	Challenge Challenge `json:"challenge,omitempty" gorm:"foreignKey:ChallengeID"`
}

// Contest 比赛模型
type Contest struct {
	ID          uint      `json:"id" gorm:"primaryKey"`
	Title       string    `json:"title" gorm:"not null"`
	Description *string   `json:"description" gorm:"type:text"`
	StartTime   time.Time `json:"startTime" gorm:"not null"`
	EndTime     time.Time `json:"endTime" gorm:"not null"`
	IsActive    bool      `json:"isActive" gorm:"default:true"`
	CreatedAt   time.Time `json:"createdAt"`
	UpdatedAt   time.Time `json:"updatedAt"`

	// 关联关系
	Participants      []ContestParticipant `json:"participants,omitempty" gorm:"foreignKey:ContestID"`
	ContestChallenges []ContestChallenge   `json:"contestChallenges,omitempty" gorm:"foreignKey:ContestID"`
}

// ContestParticipant 比赛参与者模型
type ContestParticipant struct {
	ID        uint      `json:"id" gorm:"primaryKey"`
	ContestID uint      `json:"contestId" gorm:"not null"`
	UserID    uint      `json:"userId" gorm:"not null"`
	Score     int       `json:"score" gorm:"default:0"`
	Rank      *int      `json:"rank"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`

	// 关联关系
	Contest Contest `json:"contest,omitempty" gorm:"foreignKey:ContestID"`
	User    User    `json:"user,omitempty" gorm:"foreignKey:UserID"`

	// 复合唯一索引
	_ struct{} `gorm:"uniqueIndex:idx_contest_user,composite:contest_id,user_id"`
}

// ContestChallenge 比赛题目关联模型
type ContestChallenge struct {
	ID          uint      `json:"id" gorm:"primaryKey"`
	ContestID   uint      `json:"contestId" gorm:"not null"`
	ChallengeID uint      `json:"challengeId" gorm:"not null"`
	Points      *int      `json:"points"` // 可以覆盖题目默认分数
	CreatedAt   time.Time `json:"createdAt"`
	UpdatedAt   time.Time `json:"updatedAt"`

	// 关联关系
	Contest   Contest   `json:"contest,omitempty" gorm:"foreignKey:ContestID"`
	Challenge Challenge `json:"challenge,omitempty" gorm:"foreignKey:ChallengeID"`

	// 复合唯一索引
	_ struct{} `gorm:"uniqueIndex:idx_contest_challenge,composite:contest_id,challenge_id"`
}

// BeforeCreate GORM钩子，在创建记录前执行
func (u *User) BeforeCreate(tx *gorm.DB) error {
	u.CreatedAt = time.Now()
	u.UpdatedAt = time.Now()
	return nil
}

// BeforeUpdate GORM钩子，在更新记录前执行
func (u *User) BeforeUpdate(tx *gorm.DB) error {
	u.UpdatedAt = time.Now()
	return nil
}