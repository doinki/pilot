import type { Meta, StoryObj } from '@storybook/react';

import InstallMobileOutlined from '../../lib/action/InstallMobileOutlined';

const meta: Meta<typeof InstallMobileOutlined> = {
  component: InstallMobileOutlined,
  tags: ['autodocs'],
  title: 'action/InstallMobileOutlined',
};

export default meta;
type Story = StoryObj<typeof InstallMobileOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
