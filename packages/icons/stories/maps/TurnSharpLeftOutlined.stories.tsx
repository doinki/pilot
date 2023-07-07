import type { Meta, StoryObj } from '@storybook/react';

import TurnSharpLeftOutlined from '../../lib/maps/TurnSharpLeftOutlined';

const meta: Meta<typeof TurnSharpLeftOutlined> = {
  component: TurnSharpLeftOutlined,
  tags: ['autodocs'],
  title: 'maps/TurnSharpLeftOutlined',
};

export default meta;
type Story = StoryObj<typeof TurnSharpLeftOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
