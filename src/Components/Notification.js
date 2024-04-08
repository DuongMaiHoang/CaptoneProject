import * as React from 'react'
import { Tooltip, IconButton, Avatar, Menu, Divider, MenuItem, Typography, Button, Skeleton, Box } from '@mui/material'
import { useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications'
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined'
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { formatDate, getTimeAgo } from '../Hook/useFormatDate'
import { Link } from 'react-router-dom'
import { ApplyLeaveAction } from '../Redux/ApplyLeave/ApplyLeaveSlice'
import { useDispatch } from 'react-redux'


function getIconByType(type) {
    switch (type) {
        case 'Request Leave':
            return <InsertChartOutlinedIcon style={{ width: '48px', height: '48px' }} />
        case 'Request Overtime':
            return <AddToPhotosIcon style={{ width: '48px', height: '48px' }} />
        case 'Request Worked':
            return <CalendarMonthIcon style={{ width: '48px', height: '48px' }} />
        default:
            return null
    }
}

function getLinkByType(role, type, id) {
    switch (type) {
        case 'Request Leave':
            return role == 'Manager' ? `/Manager/ManageLeave` : '/Employee/ApplyLeave'
        case 'Request Overtime':
            return role == 'Manager' ? '/Manager/ManageOvertime' : '/Employee/Overtime'
        case 'Request Worked':
            return role == 'Manager' ? '/Manager/ManageWorked' : '/Employee/Worked'
        default:
            return null
    }
}

const dataList = [
    {
        id: 1,
        name: 'Việt',
        status: 'Accept',
        type: 'Request Leave',
        fromDate: '2024-03-20T00:00:00',
        toDate: '2024-03-20T00:00:00',
        submitedDate: '2024-04-08T07:09:31.6056975',
        isSee: true,
    },
    {
        id: 2,
        name: 'Việt',
        status: 'Accept',
        type: 'Request Leave',
        fromDate: '2024-03-20T00:00:00',
        toDate: '2024-03-20T00:00:00',
        submitedDate: '2024-03-08T07:09:31.6056975',
        isSee: true,
    },
    {
        id: 3,
        name: 'Việt',
        status: 'Accept',
        type: 'Request Leave',
        fromDate: '2024-03-20T00:00:00',
        toDate: '2024-03-20T00:00:00',
        submitedDate: '2024-01-09T07:09:31.6056975',
        isSee: false,
    },
    {
        id: 4,
        name: 'Việt',
        status: 'Accept',
        type: 'Request Leave',
        fromDate: '2024-03-20T00:00:00',
        toDate: '2024-03-20T00:00:00',
        submitedDate: '2022-02-08T07:09:31.6056975',
        isSee: false,
    },
    {
        id: 5,
        name: 'Việt',
        status: 'Accept',
        type: 'Request Leave',
        fromDate: '2024-03-20T00:00:00',
        toDate: '2024-03-20T00:00:00',
        submitedDate: '2024-03-09T07:09:31.6056975',
        isSee: false,
    },
    {
        id: 6,
        name: 'Việt',
        status: 'Accept',
        type: 'Request Leave',
        fromDate: '2024-03-20T00:00:00',
        toDate: '2024-03-20T00:00:00',
        submitedDate: '2024-03-09T07:09:31.6056975',
        isSee: false,
    },
    {
        id: 7,
        name: 'Việt',
        status: 'Accept',
        type: 'Request Leave',
        fromDate: '2024-03-20T00:00:00',
        toDate: '2024-03-20T00:00:00',
        submitedDate: '2024-03-09T07:09:31.6056975',
        isSee: false,
    },
    {
        id: 8,
        name: 'Việt',
        status: 'Accept',
        type: 'Request Leave',
        fromDate: '2024-03-20T00:00:00',
        toDate: '2024-03-20T00:00:00',
        submitedDate: '2024-03-09T07:09:31.6056975',
        isSee: false,
    },
    {
        id: 9,
        name: 'Việt',
        status: 'Accept',
        type: 'Request Leave',
        fromDate: '2024-03-20T00:00:00',
        toDate: '2024-03-20T00:00:00',
        submitedDate: '2024-03-09T07:09:31.6056975',
        isSee: false,
    },
]
const dataLoading = [{}, {}, {}, {}, {}]
export default function NotificationComponent(props) {
   
    const {isLoading, dataNotification} = props
   
    console.log("fetchRealDatabase", isLoading, dataNotification)
    const [isSeeAll, setIsSeeAll] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClickChangeSeeAll = (event) => {
        setIsSeeAll(true)
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const dispatch = useDispatch()
    const handleChange = (newValue) => {
        console.log('RequestId da chay', newValue)
        dispatch(ApplyLeaveAction.changeRequestId(newValue))
    }
   
   


    const countIsSeeTrue = dataList.filter((item) => item.isSee === true).length
    return (
        <div className="relative">
            <div className="rounded-full bg-red-500 h-5 w-5 absolute text-[14px] flex items-center justify-center z-10 -right-1">
                {countIsSeeTrue}
            </div>
            <div>
                <Tooltip title="Notifications">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}>
                            <NotificationsIcon />
                        </Avatar>
                    </IconButton>
                </Tooltip>
            </div>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                PaperProps={{
                    sx: {
                        '& .MuiMenuItem-root:hover': {
                            backgroundColor: '#e5e7eb', // Màu nền khi hover
                        },
                    },
                }}
            >
                <div className="w-96 px-2  cursor-default">
                    <div className="p-2">
                        <h2 className=" font-bold text-2xl">Notifications</h2>
                    </div>
                    <div className="flex px-2 mb-2 font-semibold">
                        <div className="">New</div>
                        {/* <div className='ml-auto text-blue-300 p-1 rounded-md hover:bg-gray-300'>See All</div> */}
                    </div>
                    {isLoading == true
                        ? dataLoading.map((item, index) => {
                              return (
                                  <div className="grid grid-cols-5 w-full p-2">
                                      <div className="flex ">
                                          <Skeleton variant="circular" width={48} height={48} />
                                      </div>
                                      <Box width="100%" className="col-span-4 mt-[10px]">
                                          <Skeleton variant="text" width="100%" />
                                      </Box>
                                  </div>
                              )
                          })
                        :dataNotification && dataNotification.map((item, index) => {
                              if (!isSeeAll && index >= 5) {
                                  return null
                              }
                              return (
                                  <MenuItem
                                      key={index}
                                      style={{
                                          marginBottom: '10px',
                                          borderLeft: item.isSee ? '2px solid #3b82f6' : 'none',
                                      }}
                                  >
                                      <Link
                                          to={{
                                              pathname: getLinkByType(
                                                  'Manager',
                                                  'Request Leave',
                                                  '1290023b-0f82-40ab-975a-4c5cfd3ec189'
                                              ),
                                          }}
                                          className="grid grid-cols-5"
                                          onClick={() => handleChange(item.requestId)}
                                      >
                                          <div className="flex">{getIconByType('Request Leave')}</div>
                                          <Typography
                                              variant="inherit"
                                              style={{ whiteSpace: 'normal' }}
                                              className="col-span-4"
                                          >
                                              <strong> item.name </strong> <em>(Manager) </em> has {item.status} your{' '}
                                              {item.type} from {formatDate(item.fromDate)} to {formatDate(item.toDate)}
                                              <br />
                                              <p
                                                  className={
                                                      //item.isSee == true
                                                         //</Typography> ? 'text-blue-500 text-[12px]'  : 
                                                         'text-[12px] text-gray-500'
                                                  }
                                              >
                                                  {getTimeAgo(item.submitedDate)}
                                              </p>
                                          </Typography>
                                      </Link>
                                  </MenuItem>
                              )
                          })}
                    {isSeeAll == false ? (
                        <div className="p-2 ">
                            <Button
                                variant="contained"
                                color="inherit"
                                sx={{
                                    width: '100%',
                                    background: '#d1d5db',
                                    '&:hover': {
                                        backgroundColor: '#e5e7eb', // Màu hover mong muốn
                                    },
                                    textTransform: 'none',
                                }}
                                onClick={handleClickChangeSeeAll}
                            >
                                See previous Notifications
                            </Button>
                        </div>
                    ) : (
                        ``
                    )}
                </div>
            </Menu>
        </div>
    )
}
