// export const url = '/app/demoAction.action?'
export const baseUrl = '/app'
export const options = {
  searchAd: baseUrl + '/demoAction.action?demo&xType=selectx',
  searchDate: baseUrl + '/demoAction.action?demo&xType=selectc',
  searchIdNow: baseUrl + '/demoAction.action?demo&xType=selectx&ids=',
  pubAd: baseUrl + '/demoAction.action?dateAll&yType=add_A',
  pubDate: baseUrl + '/demoAction.action?dateAll&yType=add_B',
  changeAd: baseUrl + '/demoAction.action?dateAll&yType=update_A',
  changeDate: baseUrl + '/demoAction.action?dateAll&yType=update_B',
  delAd: baseUrl + '/demoAction.action?dateAll&yType=delete_A',
  delDate: baseUrl + '/demoAction.action?dateAll&yType=delete_B'
}