import { Calendar, ChevronDown, ChevronUp, Home, Inbox,  Plus, Projector, Search, Settings, User2 } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuBadge,
  SidebarSeparator,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"

import { DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu"
import Link from "next/link"
import { Collapsible } from "@radix-ui/react-collapsible"
import { CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
           
            <span style={{ display: "inline-block " }}>ASTU</span>
          
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarHeader>
      <SidebarSeparator/>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  {item.title==="Inbox" && (
                    <SidebarMenuBadge>24</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus/> <span className="sr-only">Add Projects</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/#">
                  <Projector/>
                      See all projects
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
                 <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/#">
                  <Plus/>
                      See all projects
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
          <Collapsible defaultOpen className="group/collapsible">
        <SidebarGroup>
        <SidebarGroupLabel asChild>
          <CollapsibleTrigger>
          Collapsable Group
          <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/#">
                  <Projector/>
                      See all projects
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
                 <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/#">
                  <Plus/>
                      See all projects
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
          </CollapsibleContent>
          
        </SidebarGroup>
        </Collapsible>
        

        <SidebarGroup>
          <SidebarGroupLabel>Nested items</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus/> <span className="sr-only">Add Projects</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/#">
                  <Projector/>
                      See all projects
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
                 <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton>
                      <Link href={"/#"} className="flex gap-0.5">
                         <Plus className="p-1"/>   <span className="p-0.5">Add project </span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                 </SidebarMenuSub>
                 <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton>
                      <Link href="/#" className="flex gap-0.5">
                         <Plus className="p-1"/>   <span className="p-0.5">Add Catagories </span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                 </SidebarMenuSub>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                < SidebarMenuButton >
                   <User2/> Boni <ChevronUp className="ml-auto"/> 
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Setting</DropdownMenuItem>
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Sign-out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>

        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}