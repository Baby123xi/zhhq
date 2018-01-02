  // export const baseUrl = 'http://121.40.241.28:7070/zhxz/app'
export const baseUrl = '/app'
export const options = {
   selectMapAddress:'https://m.amap.com/picker/?center=116.40,39.97&key=1683a75e3995650aafd98176386ccb9a',
  searchAd: baseUrl + '/demoAction.action?demo&xType=selectx',
  searchDate: baseUrl + '/demoAction.action?demo&xType=selectc',
  searchDateIds: baseUrl + '/demoAction.action?demo&xType=selectc&taskIds=',
  searchIdNow: baseUrl + '/demoAction.action?demo&xType=selectx&ids=',
  searchManageAll: baseUrl + '/demoAction.action?eventUploads&operationType=selectEMList',
  searchManagePie: baseUrl + '/demoAction.action?eventUploads&operationType=selectEMList&sjEMids=',
  ManagePush : baseUrl+'/demoAction.action?eventUploads&operationType=saveList',
  pubAd: baseUrl + '/demoAction.action?dateAll&yType=add_A',
  pubDate: baseUrl + '/demoAction.action?dateAll&yType=add_B',
  changeAd: baseUrl + '/demoAction.action?dateAll&yType=update_A&ids=',
  changeDate: baseUrl + '/demoAction.action?dateAll&yType=update_B',
  delAd: baseUrl + '/demoAction.action?dateAll&yType=delete_A',
  delDate: baseUrl + '/demoAction.action?dateAll&yType=delete_B'
}