import type { Meta, StoryObj } from '@storybook/react';

import TurnRightOutlined from '../../lib/maps/TurnRightOutlined';

const meta: Meta<typeof TurnRightOutlined> = {
  component: TurnRightOutlined,
  tags: ['autodocs'],
  title: 'maps/TurnRightOutlined',
};

export default meta;
type Story = StoryObj<typeof TurnRightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
