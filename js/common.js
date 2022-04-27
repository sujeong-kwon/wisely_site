$(function(){
  console.log("test");

  $("select").change(function(){
    let thisVal = $(this).val();
    console.log(thisVal);
    if($(this).hasClass("familysite")){
      $(location).attr("href", thisVal);
    }
  })
  // Atype과 Btype을 change method 내부에서 if구문을
  // 사용하여 구현하시오.
  // $("select").change(function(){
  //   let thisVal = $(this).val();
  //   console.log($(this));
  //   if($(this).hasClass("family-site")){
  //     $(location).attr("href", thisVal);
  //   }else{
  //     $(this).next().find("input").val(thisVal);
  //   }
  // });
});
