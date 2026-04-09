import { User } from "firebase/auth";
import { Link } from "react-router-dom";

interface HomeProps {
  user: User | null;
}

export default function Home({ user }: HomeProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 导航栏 */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-indigo-600">
                数据分析学习平台
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <span className="text-sm text-gray-700">{user.email}</span>
                  <Link to="/profile" className="text-sm text-indigo-600 hover:text-indigo-800">
                    个人中心
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-sm text-indigo-600 hover:text-indigo-800">
                    登录
                  </Link>
                  <Link to="/register" className="text-sm text-indigo-600 hover:text-indigo-800">
                    注册
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* 主内容 */}
      <div className="flex-grow flex flex-col items-center justify-center bg-gradient-to-b from-indigo-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            欢迎来到数据分析学习平台
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            专为商务数据分析与应用专业学生设计的在线学习平台，提供完整的Python数据分析课程体系和互动式学习体验。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              浏览课程
            </Link>
            {!user && (
              <Link
                to="/register"
                className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
              >
                立即注册
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          <p>© 2026 数据分析学习平台. 保留所有权利.</p>
        </div>
      </footer>
    </div>
  );
}