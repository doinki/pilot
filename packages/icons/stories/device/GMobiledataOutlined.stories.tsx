import type { Meta, StoryObj } from '@storybook/react';

import GMobiledataOutlined from '../../lib/device/GMobiledataOutlined';

const meta: Meta<typeof GMobiledataOutlined> = {
  component: GMobiledataOutlined,
  tags: ['autodocs'],
  title: 'device/GMobiledataOutlined',
};

export default meta;
type Story = StoryObj<typeof GMobiledataOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
