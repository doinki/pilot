import type { Meta, StoryObj } from '@storybook/react';

import LocalPhoneOutlined from '../../lib/maps/LocalPhoneOutlined';

const meta: Meta<typeof LocalPhoneOutlined> = {
  component: LocalPhoneOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalPhoneOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalPhoneOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
