# 环境需求

## 系统要求

### 操作系统
- Windows 10/11
- macOS 10.15+
- Ubuntu 18.04+ / CentOS 7+
- 其他支持 Node.js 的 Linux 发行版

### 硬件要求

#### 最低配置
- CPU: 双核 2.0GHz
- 内存: 4GB RAM
- 存储: 2GB 可用空间
- 网络: 稳定的互联网连接

#### 推荐配置
- CPU: 四核 2.5GHz+
- 内存: 8GB+ RAM
- 存储: 10GB+ 可用空间（SSD 推荐）
- 网络: 高速互联网连接

## 软件依赖

### 必需软件

#### Node.js
- **版本要求**: >= 18.0.0
- **推荐版本**: 18.x LTS 或 20.x LTS
- **下载地址**: [https://nodejs.org/](https://nodejs.org/)
- **验证安装**:
  ```bash
  node --version
  npm --version
  ```

#### 包管理器

**pnpm (推荐)**
- **版本要求**: >= 8.0.0
- **安装命令**:
  ```bash
  npm install -g pnpm
  ```
- **验证安装**:
  ```bash
  pnpm --version
  ```

**或者使用 npm**
- **版本要求**: >= 9.0.0
- **通常随 Node.js 一起安装**

#### Git
- **版本要求**: >= 2.20.0
- **下载地址**: [https://git-scm.com/](https://git-scm.com/)
- **验证安装**:
  ```bash
  git --version
  ```

### 开发工具（推荐）

#### 代码编辑器
- **Visual Studio Code** (推荐)
  - 扩展推荐:
    - TypeScript and JavaScript Language Features
    - ES7+ React/Redux/React-Native snippets
    - Prettier - Code formatter
    - ESLint
    - Tailwind CSS IntelliSense
    - Auto Rename Tag
    - Bracket Pair Colorizer

#### 浏览器
- **Chrome** (推荐，用于开发调试)
- **Firefox Developer Edition**
- **Edge**

## 环境配置

### Node.js 环境配置

#### 使用 nvm 管理 Node.js 版本 (推荐)

**Windows (nvm-windows)**
```bash
# 下载并安装 nvm-windows
# https://github.com/coreybutler/nvm-windows

# 安装并使用 Node.js 18
nvm install 18
nvm use 18
```

**macOS/Linux (nvm)**
```bash
# 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# 重启终端或执行
source ~/.bashrc

# 安装并使用 Node.js 18
nvm install 18
nvm use 18
nvm alias default 18
```

### 包管理器配置

#### pnpm 配置
```bash
# 设置国内镜像源（可选）
pnpm config set registry https://registry.npmmirror.com/

# 查看配置
pnpm config list
```

#### npm 配置
```bash
# 设置国内镜像源（可选）
npm config set registry https://registry.npmmirror.com/

# 查看配置
npm config list
```

## 开发环境验证

### 环境检查脚本

创建 `check-env.js` 文件：

```javascript
const { execSync } = require('child_process');
const fs = require('fs');

function checkCommand(command, name) {
  try {
    const version = execSync(command, { encoding: 'utf8' }).trim();
    console.log(`✅ ${name}: ${version}`);
    return true;
  } catch (error) {
    console.log(`❌ ${name}: 未安装或版本不兼容`);
    return false;
  }
}

function checkNodeVersion() {
  const version = process.version;
  const majorVersion = parseInt(version.slice(1).split('.')[0]);
  if (majorVersion >= 18) {
    console.log(`✅ Node.js: ${version} (符合要求)`);
    return true;
  } else {
    console.log(`❌ Node.js: ${version} (需要 >= 18.0.0)`);
    return false;
  }
}

console.log('🔍 检查开发环境...');
console.log('');

let allGood = true;

// 检查 Node.js 版本
allGood &= checkNodeVersion();

// 检查其他工具
allGood &= checkCommand('npm --version', 'npm');
allGood &= checkCommand('git --version', 'Git');

// 检查 pnpm（可选）
checkCommand('pnpm --version', 'pnpm (可选)');

console.log('');
if (allGood) {
  console.log('🎉 环境检查通过！可以开始开发了。');
} else {
  console.log('⚠️  请安装缺失的工具后重新检查。');
}
```

运行检查：
```bash
node check-env.js
```

## 常见问题

### Node.js 相关

**Q: Node.js 版本过低怎么办？**
A: 使用 nvm 升级到 18.x 或更高版本。

**Q: npm 安装速度慢？**
A: 使用国内镜像源或切换到 pnpm。

### 权限问题

**Q: Windows 上 npm 全局安装权限错误？**
A: 以管理员身份运行命令提示符，或配置 npm 全局目录。

**Q: macOS/Linux 上权限错误？**
A: 使用 nvm 管理 Node.js，避免使用 sudo 安装全局包。

### 网络问题

**Q: 包下载失败？**
A: 
1. 检查网络连接
2. 使用国内镜像源
3. 配置代理（如果需要）

```bash
# 配置代理示例
npm config set proxy http://proxy.company.com:8080
npm config set https-proxy http://proxy.company.com:8080
```

## 下一步

环境配置完成后，请参考：
- [🚀 部署指南](deployment-guide.md)
- [🔧 开发指南](development-guide.md)