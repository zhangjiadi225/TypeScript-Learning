//枚举类型
enum Status{
    OFFLINE,
    ONLINE=4,
    DELETED
}

console.log(Status.DELETED);

function getResult(status: number) {
  if (status === Status.OFFLINE) {
    return "offline";
  } else if (status === Status.ONLINE) {
    return "online";
  } else if (status === Status.DELETED) {
    return "deleted";
  }
  return "error";
}


const result =  getResult(Status.OFFLINE);
console.log(result);

