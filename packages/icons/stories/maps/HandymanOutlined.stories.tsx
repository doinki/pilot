import type { Meta, StoryObj } from '@storybook/react';

import HandymanOutlined from '../../lib/maps/HandymanOutlined';

const meta: Meta<typeof HandymanOutlined> = {
  component: HandymanOutlined,
  tags: ['autodocs'],
  title: 'maps/HandymanOutlined',
};

export default meta;
type Story = StoryObj<typeof HandymanOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
