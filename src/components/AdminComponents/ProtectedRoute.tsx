import React from 'react';
import { AuthService } from '../../utils/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, fallback }) => {
  const isAuthenticated = AuthService.isAuthenticated();

  if (!isAuthenticated) {
    return fallback || <div>غير مصرح بالدخول</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;