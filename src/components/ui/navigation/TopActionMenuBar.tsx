'use client';

import ActionMenuItem from './ActionMenuItem';
import { useRouter } from 'next/navigation';

type TopActionMenuBarProps = {
  hasBackItem?: boolean;
  hasSettingsItem?: boolean;
};

export default function TopActionMenuBar({
  hasBackItem,
  hasSettingsItem,
}: TopActionMenuBarProps) {
  const router = useRouter();

  return (
    <div className='flex justify-between w-100 items-center'>
      {hasBackItem && (
        <ActionMenuItem
          text='Back'
          icon='back'
          iconPosition='left'
          onOpen={router.back}
        />
      )}
      {hasSettingsItem && (
        <ActionMenuItem
          text='Settings'
          icon='settings'
          iconPosition='right'
          onOpen={() => router.push('/settings')}
        />
      )}
    </div>
  );
}
