// src/app/tea-bti/result/page.tsx
import TeaBtiResult from '../../../features/tea-bti/components/TeaBtiResult';
import ResponsiveLayout from '../../../components/layouts/ResponsiveLayout';

export default function TeaBtiResultPage() {
  return (
    <ResponsiveLayout hideNav>
      <TeaBtiResult />
    </ResponsiveLayout>
  );
}