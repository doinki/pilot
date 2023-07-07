import type { Meta, StoryObj } from '@storybook/react';

import BedtimeOffOutlined from '../../lib/image/BedtimeOffOutlined';

const meta: Meta<typeof BedtimeOffOutlined> = {
  component: BedtimeOffOutlined,
  tags: ['autodocs'],
  title: 'image/BedtimeOffOutlined',
};

export default meta;
type Story = StoryObj<typeof BedtimeOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
