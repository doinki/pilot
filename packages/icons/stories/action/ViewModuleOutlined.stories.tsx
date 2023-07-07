import type { Meta, StoryObj } from '@storybook/react';

import ViewModuleOutlined from '../../lib/action/ViewModuleOutlined';

const meta: Meta<typeof ViewModuleOutlined> = {
  component: ViewModuleOutlined,
  tags: ['autodocs'],
  title: 'action/ViewModuleOutlined',
};

export default meta;
type Story = StoryObj<typeof ViewModuleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
