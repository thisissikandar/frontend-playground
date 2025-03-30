
import { metaObject } from '@/config/site.config';
import FileDashboard from '@/shared/file/dashboard';

export const metadata = {
  ...metaObject(),
};

export default function FileDashboardPage() {
  // return <>Hello</>;
  return <FileDashboard />;
}
