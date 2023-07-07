import type { Meta, StoryObj } from '@storybook/react';

import FourGMobiledataOutlined from '../../lib/device/FourGMobiledataOutlined';

const meta: Meta<typeof FourGMobiledataOutlined> = {
  component: FourGMobiledataOutlined,
  tags: ['autodocs'],
  title: 'device/FourGMobiledataOutlined',
};

export default meta;
type Story = StoryObj<typeof FourGMobiledataOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
