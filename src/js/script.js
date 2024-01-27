// const sideIcons = [
//     {
//         id: 1,
//         image: "src/Assets/category.svg",
//       },
    
//       {
//         id: 2,
//         image: "src/Assets/trend-up.svg",
//       },
    
//       {
//         id: 3,
//         image: "src/Assets/profile-2user.svg",
//       },

//       {
//         id: 4,
//         image: "src/Assets/box.svg",
//       },

//       {
//         id: 5,
//         image: "src/Assets/discount-shape.svg",
//       },

//       {
//         id: 6,
//         image: "src/Assets/info-circle.svg",
//       },
    
// ]


// const displayIcon = (icons) => {
//     document.getElementById("sideIcons").innerHTML = icons
//       .map((item) => {
//         var {image} = item;
//         return `<a href="#"
//         class="relative flex items-center justify-between px-4 border-r-[3px] border-[#F7F8FA] focus:border-r-[3px] focus:border-[#0D062D]"
//         id="navIcon">
//         <img src="${image}" alt="side icon" class="w-6 h-6 ">
//         </a>`;
//       })
//       .join("");
//   };
//   displayIcon(sideIcons);

// Date display
const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const getMonth = function() {
  if (month === 1) {
    return "January";
  }else if (month === 2) {
    return "February";
  }else if (month === 3) {
    return "March";
  }else if (month === 4) {
    return "April";
  }else if (month === 5) {
    return "May";
  }else if (month === 6) {
    return "June";
  }else if (month === 7) {
    return "July";
  }else if (month === 8) {
    return "August";
  }else if (month === 9) {
    return "September";
  }else if (month === 10) {
    return "October";
  }else if (month === 11) {
    return "November";
  }else if (month === 12) {
    return "December";
  }
}

const monthNow = getMonth();


const fullDate = `${monthNow} ${day}, ${year}`;

console.log(fullDate)

const nowDate = document.querySelector('#fullDate');
nowDate.innerHTML = fullDate;


// Chart for sales trend
const salesTrend = document.getElementById("salesTrend");

new Chart(salesTrend, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "",
        data: [8000, 16000, 3000, 28000, 9000, 45000, 9000, 20000, 35000, 4000, 30000, 26000],
        backgroundColor: '#cff2e9',
        hoverBackgroundColor: '#34CAA5',
        borderRadius: 20,
        barPercentage: 0.6,
        
        tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed.y !== null) {
                  label += new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  }).format(context.parsed.y);
                }
                
                return label;
              }
            }
          },     
      },
    ],
    
  },

  // tooltip  : {
  //   callbacks: {
  //     label: function(tooltipItem) {
  //       return "$" + Number(tooltipItem.yLabel);
  //     }
  //   }
  // },
  
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        max: 50000
      }
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});