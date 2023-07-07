import type { Meta, StoryObj } from '@storybook/react';

import HeadphonesOutlined from '../../lib/hardware/HeadphonesOutlined';

const meta: Meta<typeof HeadphonesOutlined> = {
  component: HeadphonesOutlined,
  tags: ['autodocs'],
  title: 'hardware/HeadphonesOutlined',
};

export default meta;
type Story = StoryObj<typeof HeadphonesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
