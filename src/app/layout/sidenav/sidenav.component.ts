import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }
  admins: any[] = [
    {
        name: "Big A",
        icon: "folder",
        expanded: true,
        admins: [          
          {
            name: "A.a",
            icon: "folder",
            expanded: true,
            admins: [
              {
                name: "A.a.1",
                icon: "folder",
                expanded: true,
                admins: [
                  {
                    name: "Smaller",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "Smaller",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "Smaller",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "Smaller",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "Smaller",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "Smaller",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "Smaller",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "Smaller",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "Smaller",
                    icon: "file",
                    expanded: false
                  }
                ]
              } 
            ]
          },
          {
            name: "A.b",
            icon: "folder",
            expanded: true,
            admins: [
              {
                name: "A.b.1",
                icon: "folder",
                admins: [
                  {
                    name: "Smaller",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "Smaller",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "Smaller",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "Smaller",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "Smaller",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "Smaller",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "Smaller",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "Smaller",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "Smaller",
                    icon: "file",
                    expanded: false
                  }
                ]
              } 
            ]
          },
          {
            name: "A.c",
            icon: "folder",
            expanded: true,
            admins: [
              {
                name: "A.c.1",
                icon: "folder",
                admins: [
                  {
                    name: "Smaller",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "Smaller",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "Smaller",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "Smaller",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "Smaller",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "Smaller",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "Smaller",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "Smaller",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "Smaller",
                    icon: "file",
                    expanded: false
                  }
                ]
              } 
            ]
          }            
        ]
    }
  ];
  ngOnInit(): void {
  }

}
