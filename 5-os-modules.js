// os(operating system) module is one of built-in modules in nodejs

const os = require("os");

// info. about current user 
console.log(os.userInfo());

// method return system uptime/seconds system 
console.log(os.uptime());

const currentOs = {
  name:os.type(),
  release:os.release(),
  totalMem:os.totalmem(),
  freeMem:os.freemem()
}

console.log(currentOs);