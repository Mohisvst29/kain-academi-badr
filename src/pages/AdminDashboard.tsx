import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  BookOpen, 
  Calendar, 
  MessageSquare, 
  Settings, 
  BarChart3, 
  Eye, 
  Edit, 
  Trash2,
  Save,
  LogOut,
  Shield,
  Download,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';
import { AuthService, User } from '../utils/auth';
import { DataStorage, Student, Appointment, TeacherApplication, ContactMessage } from '../utils/storage';
import ProtectedRoute from '../components/AdminComponents/ProtectedRoute';
import DataExport from '../components/AdminComponents/DataExport';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);

  // Data states
  const [students, setStudents] = useState<Student[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [teacherApplications, setTeacherApplications] = useState<TeacherApplication[]>([]);
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);
  const [statistics, setStatistics] = useState<any>({});

  // Load data
  const loadData = () => {
    setStudents(DataStorage.getStudents());
    setAppointments(DataStorage.getAppointments());
    setTeacherApplications(DataStorage.getTeacherApplications());
    setContactMessages(DataStorage.getContactMessages());
    setStatistics(DataStorage.getStatistics());
  };

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setIsAuthenticated(true);
      setCurrentUser(user);
      loadData();
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setLoginError('');
    
    try {
      const user = await AuthService.login(username, password);
      if (user) {
        setIsAuthenticated(true);
        setCurrentUser(user);
        loadData();
      } else {
        setLoginError('اسم المستخدم أو كلمة المرور غير صحيحة');
      }
    } catch (error) {
      setLoginError('حدث خطأ أثناء تسجيل الدخول');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    AuthService.logout();
    setIsAuthenticated(false);
    setCurrentUser(null);
    setUsername('');
    setPassword('');
  };

  const updateAppointmentStatus = (id: string, status: 'confirmed' | 'cancelled' | 'completed') => {
    DataStorage.updateAppointment(id, { status });
    loadData();
  };

  const updateTeacherStatus = (id: string, status: 'approved' | 'rejected') => {
    DataStorage.updateTeacherApplication(id, { status });
    loadData();
  };

  const deleteStudent = (id: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذا الطالب؟')) {
      DataStorage.deleteStudent(id);
      loadData();
    }
  };

  const deleteAppointment = (id: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذا الموعد؟')) {
      DataStorage.deleteAppointment(id);
      loadData();
    }
  };

  const markMessageAsRead = (id: string) => {
    const messages = DataStorage.getContactMessages();
    const message = messages.find(m => m.id === id);
    if (message && message.status === 'unread') {
      DataStorage.addContactMessage({ ...message, status: 'read' });
      loadData();
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center p-4">
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-2xl max-w-md w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <Shield className="h-16 w-16 text-primary-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold gradient-text mb-2">لوحة التحكم</h1>
            <p className="text-gray-600">أكاديمية كيان - نظام الإدارة المتقدم</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">اسم المستخدم</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                placeholder="أدخل اسم المستخدم"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">كلمة المرور</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                placeholder="أدخل كلمة المرور"
                required
                disabled={loading}
              />
            </div>

            {loginError && (
              <motion.div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl flex items-center space-x-2 space-x-reverse"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <AlertCircle className="h-5 w-5" />
                <span>{loginError}</span>
              </motion.div>
            )}

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 px-6 rounded-xl font-bold hover:shadow-lg transition-all duration-300 disabled:opacity-50"
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              disabled={loading}
            >
              {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
            </motion.button>
          </form>

          <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <div className="text-sm text-blue-700">
              <p className="font-medium mb-1">معلومات تسجيل الدخول:</p>
              <p>اسم المستخدم: <code className="bg-blue-100 px-1 rounded">kian</code></p>
              <p>كلمة المرور: <code className="bg-blue-100 px-1 rounded">Mar2992003@</code></p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', name: 'نظرة عامة', icon: BarChart3 },
    { id: 'students', name: 'الطلاب', icon: Users },
    { id: 'appointments', name: 'المواعيد', icon: Calendar },
    { id: 'teachers', name: 'طلبات المدرسين', icon: BookOpen },
    { id: 'messages', name: 'الرسائل', icon: MessageSquare },
    { id: 'backup', name: 'النسخ الاحتياطي', icon: Download },
    { id: 'settings', name: 'الإعدادات', icon: Settings }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Statistics Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg border-r-4 border-blue-500"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">إجمالي الطلاب</p>
              <p className="text-3xl font-bold text-blue-600">{statistics.totalStudents || 0}</p>
              <p className="text-xs text-green-600 mt-1">
                <TrendingUp className="h-3 w-3 inline ml-1" />
                نشط: {statistics.activeStudents || 0}
              </p>
            </div>
            <Users className="h-12 w-12 text-blue-500" />
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg border-r-4 border-yellow-500"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">المواعيد المعلقة</p>
              <p className="text-3xl font-bold text-yellow-600">{statistics.pendingAppointments || 0}</p>
              <p className="text-xs text-blue-600 mt-1">
                <Clock className="h-3 w-3 inline ml-1" />
                مؤكد: {statistics.confirmedAppointments || 0}
              </p>
            </div>
            <Calendar className="h-12 w-12 text-yellow-500" />
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg border-r-4 border-green-500"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">طلبات المدرسين</p>
              <p className="text-3xl font-bold text-green-600">{statistics.totalTeacherApplications || 0}</p>
              <p className="text-xs text-orange-600 mt-1">
                <Clock className="h-3 w-3 inline ml-1" />
                معلق: {statistics.pendingTeacherApplications || 0}
              </p>
            </div>
            <BookOpen className="h-12 w-12 text-green-500" />
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg border-r-4 border-purple-500"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">الرسائل</p>
              <p className="text-3xl font-bold text-purple-600">{statistics.totalMessages || 0}</p>
              <p className="text-xs text-red-600 mt-1">
                <AlertCircle className="h-3 w-3 inline ml-1" />
                غير مقروءة: {statistics.unreadMessages || 0}
              </p>
            </div>
            <MessageSquare className="h-12 w-12 text-purple-500" />
          </div>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">آخر التسجيلات</h3>
          <div className="space-y-3">
            {students.slice(0, 5).map((student) => (
              <div key={student.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">{student.name}</p>
                  <p className="text-sm text-gray-600">{student.subject} - {student.grade}</p>
                </div>
                <span className="text-xs text-gray-500">
                  {new Date(student.createdAt).toLocaleDateString('ar-EG')}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">المواعيد القادمة</h3>
          <div className="space-y-3">
            {appointments
              .filter(apt => apt.status === 'confirmed')
              .slice(0, 5)
              .map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">{appointment.name}</p>
                  <p className="text-sm text-gray-600">{appointment.subject}</p>
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-800">{appointment.date}</p>
                  <p className="text-xs text-gray-600">{appointment.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-800">قائمة الطلاب المسجلين</h3>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {students.length} طالب
          </span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الاسم</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">المرحلة</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">المادة</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">رقم الطالب</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">رقم ولي الأمر</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الحالة</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">تاريخ التسجيل</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {student.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.grade}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.subject}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.studentPhone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.parentPhone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    student.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {student.status === 'active' ? 'نشط' : 'غير نشط'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(student.createdAt).toLocaleDateString('ar-EG')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2 space-x-reverse">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-900">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => deleteStudent(student.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderAppointments = () => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-800">إدارة المواعيد</h3>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
            {appointments.length} موعد
          </span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الاسم</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">رقم الهاتف</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">التاريخ</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الوقت</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">المادة</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الحالة</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {appointment.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {appointment.phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {appointment.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {appointment.time}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {appointment.subject}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                    appointment.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {appointment.status === 'pending' ? 'معلق' :
                     appointment.status === 'confirmed' ? 'مؤكد' :
                     appointment.status === 'completed' ? 'مكتمل' : 'ملغي'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2 space-x-reverse">
                    {appointment.status === 'pending' && (
                      <>
                        <button 
                          onClick={() => updateAppointmentStatus(appointment.id, 'confirmed')}
                          className="bg-green-100 text-green-600 px-3 py-1 rounded-lg text-xs hover:bg-green-200 flex items-center space-x-1 space-x-reverse"
                        >
                          <CheckCircle className="h-3 w-3" />
                          <span>تأكيد</span>
                        </button>
                        <button 
                          onClick={() => updateAppointmentStatus(appointment.id, 'cancelled')}
                          className="bg-red-100 text-red-600 px-3 py-1 rounded-lg text-xs hover:bg-red-200 flex items-center space-x-1 space-x-reverse"
                        >
                          <XCircle className="h-3 w-3" />
                          <span>إلغاء</span>
                        </button>
                      </>
                    )}
                    {appointment.status === 'confirmed' && (
                      <button 
                        onClick={() => updateAppointmentStatus(appointment.id, 'completed')}
                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-xs hover:bg-blue-200"
                      >
                        مكتمل
                      </button>
                    )}
                    <button 
                      onClick={() => deleteAppointment(appointment.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderTeachers = () => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-800">طلبات انضمام المدرسين</h3>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            {teacherApplications.length} طلب
          </span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الاسم</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">التخصص</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">رقم الهاتف</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">تاريخ التقديم</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الحالة</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {teacherApplications.map((teacher) => (
              <tr key={teacher.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {teacher.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {teacher.subject}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {teacher.phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(teacher.createdAt).toLocaleDateString('ar-EG')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    teacher.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    teacher.status === 'approved' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {teacher.status === 'pending' ? 'معلق' :
                     teacher.status === 'approved' ? 'مقبول' : 'مرفوض'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2 space-x-reverse">
                    {teacher.status === 'pending' && (
                      <>
                        <button 
                          onClick={() => updateTeacherStatus(teacher.id, 'approved')}
                          className="bg-green-100 text-green-600 px-3 py-1 rounded-lg text-xs hover:bg-green-200 flex items-center space-x-1 space-x-reverse"
                        >
                          <CheckCircle className="h-3 w-3" />
                          <span>قبول</span>
                        </button>
                        <button 
                          onClick={() => updateTeacherStatus(teacher.id, 'rejected')}
                          className="bg-red-100 text-red-600 px-3 py-1 rounded-lg text-xs hover:bg-red-200 flex items-center space-x-1 space-x-reverse"
                        >
                          <XCircle className="h-3 w-3" />
                          <span>رفض</span>
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderMessages = () => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-800">رسائل التواصل</h3>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
            {contactMessages.length} رسالة
          </span>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {contactMessages.map((message) => (
          <div key={message.id} className="p-6 hover:bg-gray-50">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 space-x-reverse mb-2">
                  <h4 className="font-medium text-gray-900">{message.name}</h4>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    message.status === 'unread' ? 'bg-red-100 text-red-800' :
                    message.status === 'read' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {message.status === 'unread' ? 'غير مقروءة' :
                     message.status === 'read' ? 'مقروءة' : 'تم الرد'}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{message.subject}</p>
                <p className="text-gray-700 mb-3">{message.message}</p>
                <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500">
                  <span>{message.phone}</span>
                  {message.email && <span>{message.email}</span>}
                  <span>{new Date(message.createdAt).toLocaleDateString('ar-EG')}</span>
                </div>
              </div>
              <div className="flex space-x-2 space-x-reverse">
                {message.status === 'unread' && (
                  <button
                    onClick={() => markMessageAsRead(message.id)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-xl font-bold text-gray-800 mb-6">إعدادات النظام</h3>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">اسم الأكاديمية</label>
            <input
              type="text"
              defaultValue="أكاديمية كيان"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">رقم الهاتف</label>
            <input
              type="text"
              defaultValue="+201144108195"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">العنوان</label>
            <input
              type="text"
              defaultValue="5P63+VJP، مدينة بدر، بدر، 4953201، مصر"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none"
            />
          </div>
          <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-2 space-x-reverse">
            <Save className="h-5 w-5" />
            <span>حفظ التغييرات</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-xl font-bold text-gray-800 mb-6">معلومات المستخدم</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 space-x-reverse">
            <Shield className="h-8 w-8 text-primary-500" />
            <div>
              <p className="font-medium text-gray-800">اسم المستخدم: {currentUser?.username}</p>
              <p className="text-sm text-gray-600">الدور: {currentUser?.role === 'admin' ? 'مدير النظام' : 'مدير'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'students':
        return renderStudents();
      case 'appointments':
        return renderAppointments();
      case 'teachers':
        return renderTeachers();
      case 'messages':
        return renderMessages();
      case 'backup':
        return <DataExport />;
      case 'settings':
        return renderSettings();
      default:
        return renderOverview();
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 space-x-reverse">
                <img 
                  src="/logo kian.png" 
                  alt="أكاديمية كيان" 
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <h1 className="text-2xl font-bold gradient-text">لوحة تحكم أكاديمية كيان</h1>
                  <p className="text-gray-600">نظام إدارة المركز التعليمي المتقدم</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-800">مرحباً، {currentUser?.username}</p>
                  <p className="text-xs text-gray-600">{currentUser?.role === 'admin' ? 'مدير النظام' : 'مدير'}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 space-x-reverse bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span>تسجيل الخروج</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-xl transition-colors ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <tab.icon className="h-5 w-5" />
                      <span>{tab.name}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-4">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {renderContent()}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default AdminDashboard;