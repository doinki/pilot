import type { Meta, StoryObj } from '@storybook/react';

import SecurityUpdateGoodOutlined from '../../lib/device/SecurityUpdateGoodOutlined';

const meta: Meta<typeof SecurityUpdateGoodOutlined> = {
  component: SecurityUpdateGoodOutlined,
  tags: ['autodocs'],
  title: 'device/SecurityUpdateGoodOutlined',
};

export default meta;
type Story = StoryObj<typeof SecurityUpdateGoodOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
