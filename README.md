# Success-box v1.0
 
 
 **Download and Installation**
 ```
  git clone https://github.com/CrkDevelopment/Success-box.git
 ```
 
 
> Html code

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Success v1.0</title>
    <link rel="stylesheet" href="/success_v1.0.css">
</head>
<body>
    <div id="success-box">
        <div class="success-box-header">
         <span id="close-btn" class="success-box-closebtn" onclick="success_close_btn()">x</span>
         <br>
            <div id="success-title">Success-title here</div>
         </div>
      </div>
      <script src="/success_v1.0.js"></script>
</body>
</html>
```

> css

```css
  #success-box {
    position: fixed;
    width: 350px;
    top: 12px;
    left: 20px;
    margin-left: 20px;
  }
  
  .success-box-header {
    border-radius: 5px 3px 10px 3px;
    padding: 10px;
    background: #09202b;
    font-size: 30px;
    color: #15bb62;
    font-size: 16px;
    font-weight: 200;
    font-family: 'Courier New', Courier, monospace;
    border-bottom: solid 2px #18d26e;
  }

  .success-box-closebtn{
    position: absolute;
    top: 8px;
    right: 15px;
    color: white;
    font-size: 22px;
    cursor: pointer;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 18px;
  }
  
  .success-box-closebtn:hover {
    color: lightgrey;
  }   
```

> Javascript

```javascript
function success_close_btn(){
    var close_btn=document.getElementById('success-box');
    close_btn.style.display='none'
    setTimeout(()=>{
        close_btn.style.display=''
    },2000)
}
```


