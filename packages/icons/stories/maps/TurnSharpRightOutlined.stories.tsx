import type { Meta, StoryObj } from '@storybook/react';

import TurnSharpRightOutlined from '../../lib/maps/TurnSharpRightOutlined';

const meta: Meta<typeof TurnSharpRightOutlined> = {
  component: TurnSharpRightOutlined,
  tags: ['autodocs'],
  title: 'maps/TurnSharpRightOutlined',
};

export default meta;
type Story = StoryObj<typeof TurnSharpRightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
