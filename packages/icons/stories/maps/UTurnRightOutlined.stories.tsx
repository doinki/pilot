import type { Meta, StoryObj } from '@storybook/react';

import UTurnRightOutlined from '../../lib/maps/UTurnRightOutlined';

const meta: Meta<typeof UTurnRightOutlined> = {
  component: UTurnRightOutlined,
  tags: ['autodocs'],
  title: 'maps/UTurnRightOutlined',
};

export default meta;
type Story = StoryObj<typeof UTurnRightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
