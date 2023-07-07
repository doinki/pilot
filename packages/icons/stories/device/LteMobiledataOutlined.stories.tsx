import type { Meta, StoryObj } from '@storybook/react';

import LteMobiledataOutlined from '../../lib/device/LteMobiledataOutlined';

const meta: Meta<typeof LteMobiledataOutlined> = {
  component: LteMobiledataOutlined,
  tags: ['autodocs'],
  title: 'device/LteMobiledataOutlined',
};

export default meta;
type Story = StoryObj<typeof LteMobiledataOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
