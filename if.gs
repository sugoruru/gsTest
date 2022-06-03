function ifs(range,text,reference,output) {
  const app = SpreadsheetApp.getActiveSpreadsheet();
  const values = [...app.getRange(range).getValues().join``];
  values.forEach((v,i)=>{
    if(v===text) {
      let referenceText = app.getRange(reference).getValues()[i].join``;
      app.getRange(`${output.slice(0,1)}${app.getRange(output).getValues().filter(String).length+1}`).setValue(referenceText);
    };
  })
}
function test(){
  /*
  A1~A6までの範囲を取得
  Aという文字を取得
  B:Bの文字を参照する
  D:Dに文字の結果を表示する
  |A|80|
  |B|75|
  |A|79|
  |C|82|
  |A|91|
  |B|78|
  こういうデータで試しました。
  適当に作ったのであまり期待はしないでください。
  */
  ifs("A1:A6","A","B:B","D:D");
}
