import type { Meta, StoryObj } from '@storybook/react';

import ResetTvOutlined from '../../lib/device/ResetTvOutlined';

const meta: Meta<typeof ResetTvOutlined> = {
  component: ResetTvOutlined,
  tags: ['autodocs'],
  title: 'device/ResetTvOutlined',
};

export default meta;
type Story = StoryObj<typeof ResetTvOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
