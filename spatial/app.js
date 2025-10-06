// Slide Manager and Charts
(function(){
  class SlideManager{
    constructor(){
      this.current=1; this.total=document.querySelectorAll('.slide').length;
      this.init();
    }
    init(){
      document.getElementById('totalSlides').textContent=this.total;
      document.getElementById('currentSlide').textContent=this.current;
      const next=document.getElementById('nextBtn');
      const prev=document.getElementById('prevBtn');
      next&&next.addEventListener('click',()=>this.go(this.current+1));
      prev&&prev.addEventListener('click',()=>this.go(this.current-1));
      document.addEventListener('keydown',(e)=>{ if(e.key==='ArrowRight') this.go(this.current+1); if(e.key==='ArrowLeft') this.go(this.current-1); });
      this.go(1);
      setTimeout(()=>{ this.makeCharts(); }, 200);
    }
    go(n){
      if(n<1||n>this.total) return; 
      const cur=document.getElementById(`slide-${this.current}`);
      cur&&cur.classList.remove('active');
      this.current=n;
      const nxt=document.getElementById(`slide-${this.current}`);
      nxt&&nxt.classList.add('active');
      const curEl=document.getElementById('currentSlide'); if(curEl) curEl.textContent=this.current;
      document.getElementById('prevBtn').disabled=this.current===1;
      document.getElementById('nextBtn').disabled=this.current===this.total;
    }
    makeCharts(){
      // Market growth chart
      const mk=document.getElementById('marketChart');
      if(mk){ new Chart(mk,{ type:'line', data:{ labels:['2025','2026','2027','2028','2029','2030'], datasets:[{ label:'Spatial Market ($B)', data:[149.6,220,310,430,600,825.46], borderColor:'#8DFF14', backgroundColor:'rgba(141,255,20,0.15)', fill:true, tension:0.35 }]}, options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{labels:{color:'#f5f5f5'}}}, scales:{ x:{ticks:{color:'#cfd8dc'}, grid:{color:'rgba(205,216,220,0.1)'}}, y:{ticks:{color:'#cfd8dc'}, grid:{color:'rgba(205,216,220,0.1)'}} } } }); }
      // Projection chart bars
      const pj=document.getElementById('projectionChart');
      if(pj){ new Chart(pj,{ type:'bar', data:{ labels:['Year 1','Year 2','Year 3'], datasets:[ {label:'Users (M)', data:[0.5,2,10], yAxisID:'y', backgroundColor:'#8DFF14' }, {label:'ARR ($M)', data:[0.9,3.6,18], yAxisID:'y1', type:'line', borderColor:'#cde', backgroundColor:'rgba(205,216,220,0.3)', tension:0.35, fill:false } ]}, options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{labels:{color:'#f5f5f5'}}}, scales:{ y:{ position:'left', ticks:{color:'#cfd8dc', callback:v=>v+'M'}, grid:{color:'rgba(205,216,220,0.1)'} }, y1:{ position:'right', ticks:{color:'#cfd8dc', callback:v=>'$'+v+'M'}, grid:{drawOnChartArea:false} }, x:{ticks:{color:'#cfd8dc'}, grid:{color:'rgba(205,216,220,0.1)'}} } } }); }
      // Scenario chart
      const sc=document.getElementById('scenarioChart');
      if(sc){ new Chart(sc,{ type:'bar', data:{ labels:['Conservative','Base','Aggressive'], datasets:[ {label:'Users (M)', data:[6,10,14], backgroundColor:'#8DFF14'}, {label:'ARR ($M)', data:[6.5,18,35], backgroundColor:'#5D878F'} ]}, options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{labels:{color:'#f5f5f5'}}}, scales:{ x:{ticks:{color:'#cfd8dc'}, grid:{color:'rgba(205,216,220,0.1)'}}, y:{ticks:{color:'#cfd8dc'}, grid:{color:'rgba(205,216,220,0.1)'}} } } }); }
    }
  }
  new SlideManager();
})();


