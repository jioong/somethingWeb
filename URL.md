2015/1/26 星期一 14:40:12 

# 统一资源定位符 (URL) #

**RFC 1738**

## 1. 绪论 ##

因特网上的**可用资源**可以用简单字符串来表示，即统一资源定位符。

## 2. 常规 URL 语法 ##

正如访问资源的方法有多种，对资源进行定位的方案也有多种。  
URL 的一般语法只是为了使用协议来建立新方案提供一个框架。  

### 2.1 URL 的主要部分 ###

**URL 通常形式如下：**

		<方案>:<方案描述部分>

一个 URL 包含了它使用的方案名称，其后紧跟一个冒号，然后是一个字符串。方案名称中的大小写字母是一样的。

### 2.2 URL 字符编码问题 ###

URL 是由一串字符组成，这些字符可以是字母、数字和特殊符号。一个 URL 可以用多种方法来表现。**URL 的解释仅取决于所用字符的特性。**  
在大多数 URL 方案中，都是使用 URL 不同部分的字符序列来代表因特网协议中所使用的八位字节序列。

**不安全：**
字符不安全的原因：空格字符就是不安全的，因为 URL 在转录或者被排版或者被处理时其中重要的空格可能被忽略，而可忽略的空格却有可能被解释。

### 2.3 分层方案和关系链接 ###

URL 有时候被用来定位那些包含指示器的资源，而这些指示器又指向其他资源。有时候这些指示器用关系链接标识，在关系链接中第二资源的位置表示符原则上“和那些除了带有次相关路径的表示符相同”。

## 3. 特殊方案 ##

**一些协议：**
1. ftp        File Transfer Protocol (文件传输协议)
2. http       Hypertext Transfer Protocol (超文本传输协议)
3. gopher     The Gopher Protocol (Gopher 协议)
4. mailto     Electronic Mail Address (电子邮件地址)
5. news       USENT News (USENT 新闻)
6. nntp       USENT News Using NNTP access (使用 NNTP 访问 USENT 新闻)
7. telnet     Reference to Interactive Sessions (交互式会话访问)
8. wais       Wide Area Information Servers (光宇信息服务系统)
9. file       Host-specific file names (特殊主机文件名)
10. prospero  Prospero Directory Service (prospero 目录服务)

### 3.1 通用因特网方案语法 ###

虽然 URL 其他部分的语法因方案的不同而不同，但那些直接使用基于 IP 的协议来定位因特网上的主机的 URL 方案都使用了如下形式的通用语法来表示特定的方案数据：

		//<用户名>:<密码>@<主机>：<端口>/<url路径>