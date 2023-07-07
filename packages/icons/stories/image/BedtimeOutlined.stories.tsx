import type { Meta, StoryObj } from '@storybook/react';

import BedtimeOutlined from '../../lib/image/BedtimeOutlined';

const meta: Meta<typeof BedtimeOutlined> = {
  component: BedtimeOutlined,
  tags: ['autodocs'],
  title: 'image/BedtimeOutlined',
};

export default meta;
type Story = StoryObj<typeof BedtimeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
