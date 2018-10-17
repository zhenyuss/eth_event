## event——订阅指定的合约事件
- 此案例基于web3.js 1.0版本，可实现对合约中event的监听。

### 实现步骤

#### 1.修改geth启动参数


```
geth --datadir ./data --networkid 15 --port 30303 --rpc --rpcaddr 0.0.0.0 --rpcport 8545 --rpcvhosts "*" --rpcapi 'db,net,eth,web3,personal' --rpccorsdomain "*" --ws --wsaddr "localhost" --wsport "8546" --wsorigins "*" --nat "any" --nodiscover --dev --dev.period 1 console 2> 1.log

```
- 重点在于增加了下列参数  

```
--ws --wsaddr "localhost" --wsport "8546" --wsorigins "*"
```

#### 2.部署map.sol合约到geth上
- 合约见map.sol

#### 3.编写用于监听合约event的js文件
- map_event.js

#### 4.运行map_event.js监听event

```
npm init -y
npm install web3 --save
node map_event.js

```
#### 5.调用map合约触发event

- 监听效果

![image](https://note.youdao.com/yws/public/resource/d67dc494f8e34558b215210287eeb960/xmlnote/WEBRESOURCEbe341cd2029081ce1b3825c66691c2b2/4105)

- 演示视频见event.mp4

- 结合这篇文章可以更好的理解[Solidity Event是如何实现的](https://www.liangzl.com/get-article-detail-11825.html)

- 参考：http://cw.hubwiz.com/card/c/web3.js-1.0/1/4/13/