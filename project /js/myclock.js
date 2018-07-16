<script>
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();


  </script>
     
</div>
    <nav>
      <ul>
         <div class="topnav">
        <li> <a href="trevors_engine_depo_home.html">Home</a></li>

        <li> <a href="trevors_engine_depo_engine.html">Sponsors</a></li>

        <li> <a href="trevors_engine_depo_orders.html">Orders</a></li>

        <li> <a href="trevors_engine_depo_contact.html">Contact</a></li>
      </div>