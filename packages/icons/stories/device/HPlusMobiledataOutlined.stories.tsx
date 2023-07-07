import type { Meta, StoryObj } from '@storybook/react';

import HPlusMobiledataOutlined from '../../lib/device/HPlusMobiledataOutlined';

const meta: Meta<typeof HPlusMobiledataOutlined> = {
  component: HPlusMobiledataOutlined,
  tags: ['autodocs'],
  title: 'device/HPlusMobiledataOutlined',
};

export default meta;
type Story = StoryObj<typeof HPlusMobiledataOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
