import AuthController from './AuthController'
import UserController from './UserController'
import StudentController from './StudentController'
import GuruController from './GuruController'
import ParentController from './ParentController'
import AnnouncementController from './AnnouncementController'
import AttendanceController from './AttendanceController'
import LeaveRequestController from './LeaveRequestController'
import DashboardController from './DashboardController'
import SiswaController from './SiswaController'
import KelasController from './KelasController'
import AcademicYearController from './AcademicYearController'
import Settings from './Settings'

const Controllers = {
    AuthController: Object.assign(AuthController, AuthController),
    UserController: Object.assign(UserController, UserController),
    StudentController: Object.assign(StudentController, StudentController),
    GuruController: Object.assign(GuruController, GuruController),
    ParentController: Object.assign(ParentController, ParentController),
    AnnouncementController: Object.assign(AnnouncementController, AnnouncementController),
    AttendanceController: Object.assign(AttendanceController, AttendanceController),
    LeaveRequestController: Object.assign(LeaveRequestController, LeaveRequestController),
    DashboardController: Object.assign(DashboardController, DashboardController),
    SiswaController: Object.assign(SiswaController, SiswaController),
    KelasController: Object.assign(KelasController, KelasController),
    AcademicYearController: Object.assign(AcademicYearController, AcademicYearController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers