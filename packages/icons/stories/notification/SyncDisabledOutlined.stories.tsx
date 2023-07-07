import type { Meta, StoryObj } from '@storybook/react';

import SyncDisabledOutlined from '../../lib/notification/SyncDisabledOutlined';

const meta: Meta<typeof SyncDisabledOutlined> = {
  component: SyncDisabledOutlined,
  tags: ['autodocs'],
  title: 'notification/SyncDisabledOutlined',
};

export default meta;
type Story = StoryObj<typeof SyncDisabledOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
