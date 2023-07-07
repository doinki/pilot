import type { Meta, StoryObj } from '@storybook/react';

import ControlPointDuplicateOutlined from '../../lib/image/ControlPointDuplicateOutlined';

const meta: Meta<typeof ControlPointDuplicateOutlined> = {
  component: ControlPointDuplicateOutlined,
  tags: ['autodocs'],
  title: 'image/ControlPointDuplicateOutlined',
};

export default meta;
type Story = StoryObj<typeof ControlPointDuplicateOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
