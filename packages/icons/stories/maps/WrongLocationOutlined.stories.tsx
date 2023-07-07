import type { Meta, StoryObj } from '@storybook/react';

import WrongLocationOutlined from '../../lib/maps/WrongLocationOutlined';

const meta: Meta<typeof WrongLocationOutlined> = {
  component: WrongLocationOutlined,
  tags: ['autodocs'],
  title: 'maps/WrongLocationOutlined',
};

export default meta;
type Story = StoryObj<typeof WrongLocationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
