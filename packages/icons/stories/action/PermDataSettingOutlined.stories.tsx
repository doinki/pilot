import type { Meta, StoryObj } from '@storybook/react';

import PermDataSettingOutlined from '../../lib/action/PermDataSettingOutlined';

const meta: Meta<typeof PermDataSettingOutlined> = {
  component: PermDataSettingOutlined,
  tags: ['autodocs'],
  title: 'action/PermDataSettingOutlined',
};

export default meta;
type Story = StoryObj<typeof PermDataSettingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
