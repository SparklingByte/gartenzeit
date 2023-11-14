import ActionMenuItem from './ActionMenuItem';

type TopActionMenuBarProps = {
  hasBackItem?: boolean;
  backOnClick: () => undefined;
  hasSettingsItem?: boolean;
  settingsOnClick: () => undefined;
};

export default function TopActionMenuBar({
  hasBackItem,
  backOnClick,
  hasSettingsItem,
  settingsOnClick,
}: TopActionMenuBarProps) {
  return (
    <div className='flex justify-between w-100 items-center'>
      {hasBackItem && (
        <ActionMenuItem
          text='Back'
          icon='back'
          iconPosition='left'
          onOpen={backOnClick}
        />
      )}
      {hasSettingsItem && (
        <ActionMenuItem
          text='Settings'
          icon='settings'
          iconPosition='right'
          onOpen={() => {
            settingsOnClick;
          }}
        />
      )}
    </div>
  );
}
