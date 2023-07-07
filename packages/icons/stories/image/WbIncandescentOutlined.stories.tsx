import type { Meta, StoryObj } from '@storybook/react';

import WbIncandescentOutlined from '../../lib/image/WbIncandescentOutlined';

const meta: Meta<typeof WbIncandescentOutlined> = {
  component: WbIncandescentOutlined,
  tags: ['autodocs'],
  title: 'image/WbIncandescentOutlined',
};

export default meta;
type Story = StoryObj<typeof WbIncandescentOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
