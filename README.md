# RMBUpper — 人民币大写批量转换

Invoice-grade 人民币大写 converter as one offline HTML file. Paste text containing amounts (发票 / 合同 / 工资单) and get each amount converted to PRC financial uppercase, with per-item and batch copy.

**Live tool:** https://qianbrady.github.io/rmbupper/

- 批量模式：自由文本提取金额（支持 ¥ 前缀、千分位逗号、1-2 位小数、负号）
- 单笔模式：即时转换
- 规则：万亿分组建位 · 组内零折叠 · 组首补零 · .00 尾整 · 上限 999999999999.99（全部记录在 engine docstring）
- JS 与 Python 参考引擎逐案一致：30/30 fixtures identical (fid.mjs)

![License](https://img.shields.io/badge/license-MIT-green)
![Offline](https://img.shields.io/badge/network-none-blue)

## License

MIT © 2025