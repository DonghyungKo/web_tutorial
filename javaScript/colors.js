var Links = {
  setColor : function(color){
    var linkList = document.querySelectorAll('a');
    var i = 0
    while(i < linkList.length){
      linkList[i].style.color = color;
      i += 1
    }
  }
}

var Body = {
  setColor: function(color){
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor: function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}

function nightDayHanlder(self){
  if (self.value === 'day'){
    Body.setBackgroundColor('white');
    Body.setColor('black');
    Links.setColor('powderblue');

    self.value = 'night';
  } else {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    Links.setColor('white');

    self.value = 'day';
  }
}
