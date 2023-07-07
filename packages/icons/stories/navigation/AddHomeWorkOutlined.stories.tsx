import type { Meta, StoryObj } from '@storybook/react';

import AddHomeWorkOutlined from '../../lib/navigation/AddHomeWorkOutlined';

const meta: Meta<typeof AddHomeWorkOutlined> = {
  component: AddHomeWorkOutlined,
  tags: ['autodocs'],
  title: 'navigation/AddHomeWorkOutlined',
};

export default meta;
type Story = StoryObj<typeof AddHomeWorkOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
