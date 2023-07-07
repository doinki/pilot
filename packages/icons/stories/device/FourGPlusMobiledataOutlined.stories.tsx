import type { Meta, StoryObj } from '@storybook/react';

import FourGPlusMobiledataOutlined from '../../lib/device/FourGPlusMobiledataOutlined';

const meta: Meta<typeof FourGPlusMobiledataOutlined> = {
  component: FourGPlusMobiledataOutlined,
  tags: ['autodocs'],
  title: 'device/FourGPlusMobiledataOutlined',
};

export default meta;
type Story = StoryObj<typeof FourGPlusMobiledataOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
