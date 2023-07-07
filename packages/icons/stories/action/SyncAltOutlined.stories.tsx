import type { Meta, StoryObj } from '@storybook/react';

import SyncAltOutlined from '../../lib/action/SyncAltOutlined';

const meta: Meta<typeof SyncAltOutlined> = {
  component: SyncAltOutlined,
  tags: ['autodocs'],
  title: 'action/SyncAltOutlined',
};

export default meta;
type Story = StoryObj<typeof SyncAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
