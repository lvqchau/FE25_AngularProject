import { Component, Input, ViewEncapsulation, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @Input() public movieChosen: string;
  title = "AngularProjectHTML";

  ngAfterViewInit() {
    document.getElementsByClassName("main__tabset")[0].getElementsByTagName("ul")[0].classList.add("main__nav");
  }

  statusCinema: boolean = false;
  statusDate: boolean = false;
  statusTime: boolean = false;
  selectedMovie: string = "Phim";
  selectedCinema: string = "Cụm rạp";
  selectedDate: string = "Ngày xem";
  selectedTime: string = "Xuất chiếu";

  //Table_0: Movie_id | Movie_title -- tất cả các movies của tất cả các brand
  movieArray = [
    {
      movie_id: 1,
      movie_title: "Người nhện xa nhà"
    },
    {
      movie_id: 2,
      movie_title: "Coco",
    },
    {
      movie_id: 3,
      movie_title: "IT",
    },
    {
      movie_id: 4,
      movie_title: "Mama",
    },
    {
      movie_id: 5,
      movie_title: "Avengers",
    }
  ]

  //Table_1: Cinema_brand | Branch_id | Branch_name | Branch_address
  cinemaArray = [
    {
      cinema_brand: 'BHD',
      cinema_branches: [
        {
          branch_id: 1,
          branch_name: "BHD Cineplex Vincom",
          branch_address: "Vincom đường số gì đó",
        },
        {
          branch_id: 2,
          branch_name: "BHD Cineplex Diamond",
          branch_address: "Diamond đường số gì đó",
        }
      ],
    },
    {
      cinema_brand: 'CGV',
      cinema_branches: [
        {
          branch_id: 1,
          branch_name: "CGV Vincom",
          branch_address: "Vincom đường số gì đó",
        },
        {
          branch_id: 2,
          branch_name: "CGV Diamond",
          branch_address: "Diamond đường số gì đó",
        }
      ],
    }
  ]

  //Table_2: Cinema_brand | Branch_id | Movie_id | Movie_title
  // Match Cinema_brand + Branch_id of Table_1
  BranchMovieArray = [
    {
      cinema_brand: 'BHD',
      cinema_branches: [
        {
          branch_id: 1,
          branch_movies: [
            {
              movie_id: 1,
              movie_title: "Người nhện xa nhà",
            },
            {
              movie_id: 2,
              movie_title: "Coco",
            },
            {
              movie_id: 3,
              movie_title: "IT",
            },
            {
              movie_id: 4,
              movie_title: "Mama",
            },
            {
              movie_id: 5,
              movie_title: "Avengers",
            }
          ]
        },
        {
          branch_id: 2,
          branch_movies: [
            {
              movie_id: 1,
              movie_title: "Người nhện xa nhà",
            },
            {
              movie_id: 2,
              movie_title: "Coco",
            },
            {
              movie_id: 3,
              movie_title: "IT",
            },
            {
              movie_id: 4,
              movie_title: "Mama",
            },
            {
              movie_id: 5,
              movie_title: "Avengers",
            }
          ]
        }
      ]
    },
    {
      cinema_brand: 'CGV',
      cinema_branches: [
        {
          branch_id: 1,
          branch_movies: [
            {
              movie_id: 1,
              movie_title: "Người nhện xa nhà",
            },
            {
              movie_id: 2,
              movie_title: "Coco",
            },
            {
              movie_id: 3,
              movie_title: "IT",
            },
            {
              movie_id: 4,
              movie_title: "Mama",
            },
            {
              movie_id: 5,
              movie_title: "Avengers",
            }
          ]
        },
        {
          branch_id: 2,
          branch_movies: [
            {
              movie_id: 1,
              movie_title: "Người nhện xa nhà",
            },
            {
              movie_id: 2,
              movie_title: "Coco",
            },
            {
              movie_id: 3,
              movie_title: "IT",
            },
            {
              movie_id: 4,
              movie_title: "Mama",
            },
            {
              movie_id: 5,
              movie_title: "Avengers",
            }
          ]
        }
      ]
    }
  ]

  //Table_3: Cinema_brand | Branch_id | Movie_id | Date | Time
  // Match Cinema_brand + Branch_id + Movie_id of Table_2
  BranchMovieScheduleArray = [
    {
      cinema_brand: 'BHD',
      cinema_branches: [
        {
          branch_id: 1,
          movie_schedule: [
            {
              movie_id: 1,
              movie_watch: [
                {
                  movie_date: "04-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "05-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "06-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "07-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                }
              ]
            },
            {
              movie_id: 2,
              movie_watch: [
                {
                  movie_date: "04-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "05-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "06-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "07-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                }
              ]
            },
            {
              movie_id: 3,
              movie_watch: [
                {
                  movie_date: "04-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "05-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "06-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "07-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                }
              ]
            },
            {
              movie_id: 4,
              movie_watch: [
                {
                  movie_date: "04-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "05-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "06-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "07-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                }
              ]
            },
            {
              movie_id: 5,
              movie_watch: [
                {
                  movie_date: "04-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "05-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "06-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "07-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                }
              ]
            },
          ]
        },
        {
          branch_id: 2,
          movie_schedule: [
            {
              movie_id: 1,
              movie_watch: [
                {
                  movie_date: "04-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "05-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "06-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "07-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                }
              ]
            },
            {
              movie_id: 2,
              movie_watch: [
                {
                  movie_date: "04-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "05-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "06-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "07-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                }
              ]
            },
            {
              movie_id: 3,
              movie_watch: [
                {
                  movie_date: "04-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "05-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "06-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "07-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                }
              ]
            },
            {
              movie_id: 4,
              movie_watch: [
                {
                  movie_date: "04-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "05-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "06-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "07-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                }
              ]
            },
            {
              movie_id: 5,
              movie_watch: [
                {
                  movie_date: "04-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "05-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "06-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "07-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                }
              ]
            },
          ]
        }
      ]
    },
    {
      cinema_brand: 'CGV',
      cinema_branches: [
        {
          branch_id: 1,
          movie_schedule: [
            {
              movie_id: 1,
              movie_watch: [
                {
                  movie_date: "04-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "05-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "06-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "07-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                }
              ]
            },
            {
              movie_id: 2,
              movie_watch: [
                {
                  movie_date: "04-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "05-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "06-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "07-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                }
              ]
            },
            {
              movie_id: 3,
              movie_watch: [
                {
                  movie_date: "04-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "05-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "06-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "07-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                }
              ]
            },
            {
              movie_id: 4,
              movie_watch: [
                {
                  movie_date: "04-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "05-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "06-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "07-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                }
              ]
            },
            {
              movie_id: 5,
              movie_watch: [
                {
                  movie_date: "04-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "05-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "06-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "07-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                }
              ]
            },
          ]
        },
        {
          branch_id: 2,
          movie_schedule: [
            {
              movie_id: 1,
              movie_watch: [
                {
                  movie_date: "04-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "05-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "06-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "07-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                }
              ]
            },
            {
              movie_id: 2,
              movie_watch: [
                {
                  movie_date: "04-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "05-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "06-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "07-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                }
              ]
            },
            {
              movie_id: 3,
              movie_watch: [
                {
                  movie_date: "04-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "05-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "06-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "07-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                }
              ]
            },
            {
              movie_id: 4,
              movie_watch: [
                {
                  movie_date: "04-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "05-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "06-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "07-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                }
              ]
            },
            {
              movie_id: 5,
              movie_watch: [
                {
                  movie_date: "04-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "05-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "06-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                },
                {
                  movie_date: "07-08-2019",
                  movie_time: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30"]
                }
              ]
            },
          ]
        }
      ]
    }
  ]

  //Arrays
  cinemaList = [
    "CGV",
    "BHD",
  ];
  cinemaListArray = [
    {
      branch: "CGV 1",
      movie: [1, 2, 3, 4]
    },
    {
      branch: "CGV 2",
      movie: [1, 3, 4]
    },
    {
      branch: "BHD 1",
      movie: [2, 5, 1]
    },
    {
      branch: "BHD 2",
      movie: [1, 2, 3, 4, 5]
    }
  ];
  dateList = [
    {
      date: new Date(),
      DOW: "Hôm nay"
    },
    {
      date: new Date().setDate(new Date().getDate() + 1),
      DOW: "Ngày mai"
    },
    {
      date: new Date().setDate(new Date().getDate() + 2),
      DOW: ""
    },
    {
      date: new Date().setDate(new Date().getDate() + 3),
      DOW: ""
    },
    {
      date: new Date().setDate(new Date().getDate() + 4),
      DOW: ""
    },
    {
      date: new Date().setDate(new Date().getDate() + 5),
      DOW: ""
    }
  ];
  timeList = ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30"];

  constructor() {
    for (let i = 2; i < this.dateList.length; i++) {
      let curDate = new Date();

      //"Hôm nay": T7: 6
      let curDay: number = new Date().getDay();
      //skip qua "Ngày mai" : CN: 0
      if (curDay + 1 === 7) curDay = 0;
      else curDay = curDay + 1;

      switch (i) {
        case 2:
          curDay = curDay + 1;
          break;
        case 3:
          curDay = curDay + 2;
          break;
        case 4:
          curDay = curDay + 3;
          break;
        case 5:
          curDay = curDay + 4;
          break;
      }
      switch (curDay) {
        case 0:
          this.dateList[i].DOW = "Chủ Nhật";
          break;
        case 1:
          this.dateList[i].DOW = "Thứ Hai";
          break;
        case 2:
          this.dateList[i].DOW = "Thứ Ba";
          break;
        case 3:
          this.dateList[i].DOW = "Thứ Tư";
          break;
        case 4:
          this.dateList[i].DOW = "Thứ Năm";
          break;
        case 5:
          this.dateList[i].DOW = "Thứ Sáu";
          break;
        case 6:
          this.dateList[i].DOW = "Thứ Bảy";
          break;
      }
    }
  }
  formatDate(date) {
    let d = new Date(date);
    let day;
    let month;
    let year = d.getFullYear();
    month = d.getMonth() + 1;
    day = d.getDate();
    if (day < 9) day = "0" + day;
    if (month < 9) month = "0" + month;
    return [day, month, year].join("-");
  }

  setSelected(value, check) {
    if (check === 1) {
      this.selectedMovie = value;
      this.statusCinema = true;
    } else if (check === 2) {
      this.selectedCinema = value;
      this.statusDate = true;
    } else if (check === 3) {
      this.selectedDate = this.formatDate(value);
      this.statusTime = true;
    } else if (check === 4) {
      this.selectedTime = value;
    }

    // this.movieStatus = false;
  }
}
